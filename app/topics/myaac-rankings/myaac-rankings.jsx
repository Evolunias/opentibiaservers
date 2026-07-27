import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-rankings');
}

export default function MyaacRankingsKeywordPage() {
  return <StaticKeywordPage slug="myaac-rankings" />;
}
