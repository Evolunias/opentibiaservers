import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-reviews-server-poland');
}

export default function VenoreotWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-reviews-server-poland" />;
}
