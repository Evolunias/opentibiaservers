import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-reviews-server-germany');
}

export default function RookgaardTalesWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-reviews-server-germany" />;
}
