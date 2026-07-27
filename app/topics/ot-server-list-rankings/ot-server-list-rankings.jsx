import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-rankings');
}

export default function OtServerListRankingsKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-rankings" />;
}
