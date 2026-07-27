import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-with-reviews-server');
}

export default function RookgaardTales15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-with-reviews-server" />;
}
