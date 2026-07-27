import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-0-with-reviews-server');
}

export default function RookgaardTales80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-0-with-reviews-server" />;
}
