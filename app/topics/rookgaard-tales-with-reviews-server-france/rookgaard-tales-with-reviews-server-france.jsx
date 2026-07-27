import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-reviews-server-france');
}

export default function RookgaardTalesWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-reviews-server-france" />;
}
