import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-rankings');
}

export default function EvoServerRankingsKeywordPage() {
  return <StaticKeywordPage slug="evo-server-rankings" />;
}
