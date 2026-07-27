import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-review');
}

export default function RookgaardTalesReviewKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-review" />;
}
