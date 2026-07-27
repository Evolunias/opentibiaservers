import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-rankings');
}

export default function OtlandRankingsKeywordPage() {
  return <StaticKeywordPage slug="otland-rankings" />;
}
