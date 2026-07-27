import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-rankings');
}

export default function BaiakServerRankingsKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-rankings" />;
}
