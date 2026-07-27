import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-reviews-server-latin-america');
}

export default function VenoreotWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-reviews-server-latin-america" />;
}
