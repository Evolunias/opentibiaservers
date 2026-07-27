import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-10-0-with-reviews-server');
}

export default function RookgaardTales100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-10-0-with-reviews-server" />;
}
