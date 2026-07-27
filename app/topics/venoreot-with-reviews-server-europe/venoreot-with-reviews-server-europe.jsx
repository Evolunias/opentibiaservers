import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-reviews-server-europe');
}

export default function VenoreotWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-reviews-server-europe" />;
}
