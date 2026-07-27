import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-14-with-reviews-server');
}

export default function RookgaardTales14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-14-with-reviews-server" />;
}
