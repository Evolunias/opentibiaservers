import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-reviews-server-usa');
}

export default function RookgaardTalesWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-reviews-server-usa" />;
}
