import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-reviews-server-chile');
}

export default function VenoreotWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-reviews-server-chile" />;
}
