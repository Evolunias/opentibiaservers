import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-players-online');
}

export default function EvoluniaPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="evolunia-players-online" />;
}
