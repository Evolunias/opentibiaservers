import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-players-online-europe');
}

export default function EvoPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-players-online-europe" />;
}
