import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-rankings');
}

export default function PvpeServerRankingsKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-rankings" />;
}
