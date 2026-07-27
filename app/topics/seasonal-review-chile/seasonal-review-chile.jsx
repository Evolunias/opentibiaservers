import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-review-chile');
}

export default function SeasonalReviewChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-review-chile" />;
}
