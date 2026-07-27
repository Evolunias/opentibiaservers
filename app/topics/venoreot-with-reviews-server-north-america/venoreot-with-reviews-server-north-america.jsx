import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-reviews-server-north-america');
}

export default function VenoreotWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-reviews-server-north-america" />;
}
