import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-players-online-usa');
}

export default function EvoPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-players-online-usa" />;
}
