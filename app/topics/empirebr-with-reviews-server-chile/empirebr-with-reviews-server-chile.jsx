import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-reviews-server-chile');
}

export default function EmpirebrWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-reviews-server-chile" />;
}
