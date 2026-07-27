import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-reviews-server-canada');
}

export default function EmpirebrWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-reviews-server-canada" />;
}
