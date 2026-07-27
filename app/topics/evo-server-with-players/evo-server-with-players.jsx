import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-with-players');
}

export default function EvoServerWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="evo-server-with-players" />;
}
