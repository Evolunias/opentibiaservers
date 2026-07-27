import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-reviews-server-chile');
}

export default function RookgaardTalesWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-reviews-server-chile" />;
}
