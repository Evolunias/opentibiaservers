import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-reviews-server-germany');
}

export default function EmpirebrWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-reviews-server-germany" />;
}
