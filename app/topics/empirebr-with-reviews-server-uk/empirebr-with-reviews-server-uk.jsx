import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-reviews-server-uk');
}

export default function EmpirebrWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-reviews-server-uk" />;
}
