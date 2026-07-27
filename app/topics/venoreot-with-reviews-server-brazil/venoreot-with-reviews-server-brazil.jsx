import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-reviews-server-brazil');
}

export default function VenoreotWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-reviews-server-brazil" />;
}
