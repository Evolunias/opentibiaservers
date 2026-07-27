import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-reviews-server-germany');
}

export default function VenoreotWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-reviews-server-germany" />;
}
