import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-6-with-reviews-server');
}

export default function RookgaardTales86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-6-with-reviews-server" />;
}
