import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-reviews-server-north-america');
}

export default function RookgaardTalesWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-reviews-server-north-america" />;
}
