import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-with-reviews-server');
}

export default function RookgaardTales11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-with-reviews-server" />;
}
