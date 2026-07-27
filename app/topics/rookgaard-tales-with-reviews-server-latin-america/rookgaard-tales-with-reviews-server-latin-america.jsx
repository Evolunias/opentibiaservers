import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-reviews-server-latin-america');
}

export default function RookgaardTalesWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-reviews-server-latin-america" />;
}
