import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-players-online-uk');
}

export default function EvoPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="evo-players-online-uk" />;
}
