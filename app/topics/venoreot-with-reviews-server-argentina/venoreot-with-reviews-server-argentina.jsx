import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-reviews-server-argentina');
}

export default function VenoreotWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-reviews-server-argentina" />;
}
