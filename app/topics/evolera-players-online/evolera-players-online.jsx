import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-players-online');
}

export default function EvoleraPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="evolera-players-online" />;
}
