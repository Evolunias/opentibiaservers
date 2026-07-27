import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-players-online-canada');
}

export default function EvoPlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-players-online-canada" />;
}
