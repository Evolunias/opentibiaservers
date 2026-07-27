import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-reviews-server-mexico');
}

export default function VenoreotWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-reviews-server-mexico" />;
}
