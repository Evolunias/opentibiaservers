import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-1-with-reviews-server');
}

export default function RookgaardTales81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-1-with-reviews-server" />;
}
