import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-reviews-server-uk');
}

export default function RookgaardTalesWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-reviews-server-uk" />;
}
