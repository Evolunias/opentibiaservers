import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-review-chile');
}

export default function LowExpReviewChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-review-chile" />;
}
