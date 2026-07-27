import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-reviews');
}

export default function RookgaardTalesReviewsKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-reviews" />;
}
