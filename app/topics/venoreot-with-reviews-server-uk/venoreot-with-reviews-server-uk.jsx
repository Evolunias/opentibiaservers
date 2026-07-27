import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-reviews-server-uk');
}

export default function VenoreotWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-reviews-server-uk" />;
}
