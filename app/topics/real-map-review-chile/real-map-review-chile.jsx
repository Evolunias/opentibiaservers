import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-chile');
}

export default function RealMapReviewChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-chile" />;
}
