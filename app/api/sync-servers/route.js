import { createClient } from '@supabase/supabase-js';
import { fetchOtservlistServers } from '@/lib/otservlist';
import { buildEnrichedServerPayload, fetchOfficialWebsiteResearch } from '@/lib/server-enrichment';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SOURCE = 'otservlist.org';

function firstNonEmpty(values = []) {
  return values.find((value) => typeof value === 'string' && value.trim())?.trim() || '';
}

function getSupabaseAdmin() {
  const url = firstNonEmpty([
    process.env.SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_SUPABASE_DB_URL,
    process.env.PROJECT_URL,
  ]);
  const serviceRoleKey = firstNonEmpty([
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY,
    process.env.SECRET_KEY,
  ]);

  if (!url || !serviceRoleKey) {
    throw new Error('Missing Supabase project URL or service role key');
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

async function readJson(req) {
  if (req.method !== 'POST') return {};
  try {
    return await req.json();
  } catch {
    return {};
  }
}

function readToken(req, url, body) {
  const auth = req.headers.get('authorization') || '';
  const bearer = auth.toLowerCase().startsWith('bearer ') ? auth.slice(7) : '';
  return (
    req.headers.get('x-sync-token') ||
    bearer ||
    url.searchParams.get('token') ||
    body.token ||
    ''
  );
}

function boolOption(value, fallback = false) {
  if (value === undefined || value === null || value === '') return fallback;
  if (typeof value === 'boolean') return value;
  return ['1', 'true', 'yes', 'on'].includes(String(value).toLowerCase());
}

function intOption(value, fallback, min, max) {
  const parsed = Number.parseInt(String(value ?? ''), 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(min, Math.min(max, parsed));
}

function cleanRow(server) {
  return Object.fromEntries(
    Object.entries(server)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => [key, value === '' ? null : value])
  );
}

async function upsertServer(supabase, row) {
  const { data: existing, error: selectError } = await supabase
    .from('servers')
    .select('id')
    .eq('source', row.source)
    .eq('source_id', row.source_id)
    .maybeSingle();

  if (selectError) throw selectError;

  if (existing?.id) {
    const { error } = await supabase
      .from('servers')
      .update(row)
      .eq('id', existing.id);

    if (error) throw error;
    return 'updated';
  }

  const { error } = await supabase.from('servers').insert([row]);
  if (error) throw error;
  return 'inserted';
}

async function logSync(supabase, result) {
  try {
    await supabase.from('sync_logs').insert([
      {
        timestamp: result.timestamp,
        success: result.success,
        fetched: result.fetched,
        inserted: result.inserted,
        updated: result.updated,
        failed: result.failed,
        error: result.error || null,
        execution_time_ms: result.execution_time_ms,
      },
    ]);
  } catch (error) {
    console.error('Failed to write sync log:', error);
  }
}

async function handleSync(req) {
  const startedAt = Date.now();
  const timestamp = new Date().toISOString();
  const url = new URL(req.url);
  const body = await readJson(req);
  const expectedToken = process.env.SYNC_TOKEN || '';
  const providedToken = readToken(req, url, body);

  if (expectedToken && providedToken !== expectedToken) {
    return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getSupabaseAdmin();
  const pageLimit = intOption(
    body.pageLimit ?? url.searchParams.get('pages') ?? process.env.OTSERVLIST_PAGE_LIMIT,
    4,
    1,
    50
  );
  const includeDetails = boolOption(
    body.includeDetails ?? url.searchParams.get('includeDetails') ?? process.env.OTSERVLIST_INCLUDE_DETAILS,
    true
  );
  const detailLimit = intOption(
    body.detailLimit ?? url.searchParams.get('detailLimit') ?? process.env.OTSERVLIST_DETAIL_LIMIT,
    100,
    0,
    1000
  );
  const officialResearchLimit = intOption(
    body.officialResearchLimit ?? url.searchParams.get('officialResearchLimit') ?? process.env.OTSERVLIST_OFFICIAL_RESEARCH_LIMIT,
    0,
    0,
    250
  );

  const result = {
    success: false,
    source: SOURCE,
    timestamp,
    fetched: 0,
    inserted: 0,
    updated: 0,
    failed: 0,
    pages: [],
    execution_time_ms: 0,
  };

  try {
    const payload = await fetchOtservlistServers({
      baseUrl: process.env.OTSERVLIST_BASE_URL || 'https://otservlist.org',
      fetchMode: body.fetchMode ?? url.searchParams.get('fetchMode') ?? process.env.OTSERVLIST_FETCH_MODE,
      pageLimit,
      includeDetails,
      detailLimit,
      scrapingBeeApiKey: process.env.SCRAPINGBEE_API_KEY,
      renderJs: boolOption(body.renderJs ?? url.searchParams.get('renderJs') ?? process.env.SCRAPINGBEE_RENDER_JS, false),
      premiumProxy: boolOption(body.premiumProxy ?? url.searchParams.get('premiumProxy') ?? process.env.SCRAPINGBEE_PREMIUM_PROXY, false),
      countryCode: body.countryCode ?? url.searchParams.get('countryCode') ?? process.env.SCRAPINGBEE_COUNTRY_CODE,
      pageDelayMs: intOption(process.env.OTSERVLIST_PAGE_DELAY_MS, 750, 0, 10000),
      detailDelayMs: intOption(process.env.OTSERVLIST_DETAIL_DELAY_MS, 750, 0, 10000),
    });

    result.pages = payload.pages;
    result.fetched = payload.servers.length;

    for (const [index, server] of payload.servers.entries()) {
      try {
        const research = index < officialResearchLimit
          ? await fetchOfficialWebsiteResearch(server, {
              timeoutMs: intOption(process.env.OTSERVLIST_OFFICIAL_TIMEOUT_MS, 15000, 1000, 30000),
            })
          : null;
        const row = {
          ...server,
          ...buildEnrichedServerPayload(server, research),
        };
        const status = await upsertServer(supabase, cleanRow(row));
        if (status === 'inserted') result.inserted += 1;
        if (status === 'updated') result.updated += 1;
      } catch (error) {
        result.failed += 1;
        console.error(`Failed to sync ${server.source_id || server.ip}:`, error);
      }
    }

    result.success = result.failed === 0 || result.fetched > result.failed;
    result.execution_time_ms = Date.now() - startedAt;
    await logSync(supabase, result);

    return Response.json(result, { status: result.success ? 200 : 500 });
  } catch (error) {
    result.error = error instanceof Error ? error.message : String(error);
    result.execution_time_ms = Date.now() - startedAt;
    await logSync(supabase, result);

    return Response.json(result, { status: 500 });
  }
}

export async function GET(req) {
  return handleSync(req);
}

export async function POST(req) {
  return handleSync(req);
}
