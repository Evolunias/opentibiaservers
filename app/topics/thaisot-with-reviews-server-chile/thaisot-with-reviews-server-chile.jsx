import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-reviews-server-chile');
}

export default function ThaisotWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-reviews-server-chile" />;
}
