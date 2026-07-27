import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-reviews-server-europe');
}

export default function RookgaardTalesWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-reviews-server-europe" />;
}
