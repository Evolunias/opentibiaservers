import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-reviews-server-poland');
}

export default function RookgaardTalesWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-reviews-server-poland" />;
}
