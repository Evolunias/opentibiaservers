import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-1-with-reviews-server');
}

export default function RookgaardTales71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-1-with-reviews-server" />;
}
