import { createClient } from '@supabase/supabase-js';
import { fetchOtservlistServers } from '@/lib/otservlist';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SOURCE = 'otservlist.org';

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error('Missing SUPABASE_URL/NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
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
    3,
    1,
    50
  );
  const includeDetails = boolOption(
    body.includeDetails ?? url.searchParams.get('includeDetails') ?? process.env.OTSERVLIST_INCLUDE_DETAILS,
    false
  );
  const detailLimit = intOption(
    body.detailLimit ?? url.searchParams.get('detailLimit') ?? process.env.OTSERVLIST_DETAIL_LIMIT,
    25,
    0,
    500
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
      pageLimit,
      includeDetails,
      detailLimit,
      pageDelayMs: intOption(process.env.OTSERVLIST_PAGE_DELAY_MS, 750, 0, 10000),
      detailDelayMs: intOption(process.env.OTSERVLIST_DETAIL_DELAY_MS, 750, 0, 10000),
    });

    result.pages = payload.pages;
    result.fetched = payload.servers.length;

    for (const server of payload.servers) {
      try {
        const status = await upsertServer(supabase, cleanRow(server));
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
