import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-reviews-server-canada');
}

export default function VenoreotWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-reviews-server-canada" />;
}
