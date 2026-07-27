import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-review-chile');
}

export default function CustomMapReviewChileKeywordPage() {
  return <StaticKeywordPage slug="custom-map-review-chile" />;
}
