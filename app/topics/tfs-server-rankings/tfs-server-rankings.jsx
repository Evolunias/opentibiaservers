import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-rankings');
}

export default function TfsServerRankingsKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-rankings" />;
}
