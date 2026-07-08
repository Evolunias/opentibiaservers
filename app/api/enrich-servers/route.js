import { fetchOfficialWebsiteResearch, buildEnrichedServerPayload } from '@/lib/server-enrichment';
import { getSupabaseServerClient } from '@/lib/supabase-server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function readJson(req) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

function intOption(value, fallback, min, max) {
  const parsed = Number.parseInt(String(value ?? ''), 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(min, Math.min(max, parsed));
}

function readToken(req, url, body) {
  const auth = req.headers.get('authorization') || '';
  const bearer = auth.toLowerCase().startsWith('bearer ') ? auth.slice(7) : '';
  return req.headers.get('x-sync-token') || bearer || url.searchParams.get('token') || body.token || '';
}

export async function POST(req) {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return Response.json({ success: false, error: 'Supabase server client is not configured.' }, { status: 500 });
  }

  const url = new URL(req.url);
  const body = await readJson(req);
  const expectedToken = process.env.SYNC_TOKEN || '';
  const providedToken = readToken(req, url, body);

  if (expectedToken && providedToken !== expectedToken) {
    return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const limit = intOption(body.limit ?? url.searchParams.get('limit') ?? process.env.SEO_ENRICH_LIMIT, 100, 1, 250);
  const timeoutMs = intOption(body.timeoutMs ?? url.searchParams.get('timeoutMs') ?? process.env.OTSERVLIST_OFFICIAL_TIMEOUT_MS, 15000, 1000, 30000);

  const { data: servers, error } = await supabase
    .from('servers')
    .select('*')
    .eq('source', 'otservlist.org')
    .order('players_online', { ascending: false, nullsFirst: false })
    .limit(limit);

  if (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }

  const results = [];

  for (const server of servers || []) {
    try {
      const research = await fetchOfficialWebsiteResearch(server, { timeoutMs });
      const payload = buildEnrichedServerPayload(server, research);
      const { error: updateError } = await supabase
        .from('servers')
        .update(payload)
        .eq('id', server.id);

      if (updateError) throw updateError;

      results.push({
        id: server.id,
        slug: payload.slug,
        name: server.name,
        researched: Boolean(research?.fetched),
        source_url: research?.source_url || server.website_url || server.external_launch_url || null,
      });
    } catch (enrichError) {
      results.push({
        id: server.id,
        name: server.name,
        researched: false,
        error: enrichError instanceof Error ? enrichError.message : String(enrichError),
      });
    }
  }

  return Response.json({
    success: true,
    processed: results.length,
    researched: results.filter((item) => item.researched).length,
    results,
    timestamp: new Date().toISOString(),
  });
}
