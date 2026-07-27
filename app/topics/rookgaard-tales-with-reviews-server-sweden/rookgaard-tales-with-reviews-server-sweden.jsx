import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-reviews-server-sweden');
}

export default function RookgaardTalesWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-reviews-server-sweden" />;
}
