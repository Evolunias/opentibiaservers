import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-review-chile');
}

export default function HighExpReviewChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-review-chile" />;
}
