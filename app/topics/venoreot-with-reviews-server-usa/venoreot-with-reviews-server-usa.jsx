import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-reviews-server-usa');
}

export default function VenoreotWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-reviews-server-usa" />;
}
