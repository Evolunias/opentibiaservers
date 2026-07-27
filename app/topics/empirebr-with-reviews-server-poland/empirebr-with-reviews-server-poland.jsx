import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-reviews-server-poland');
}

export default function EmpirebrWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-reviews-server-poland" />;
}
