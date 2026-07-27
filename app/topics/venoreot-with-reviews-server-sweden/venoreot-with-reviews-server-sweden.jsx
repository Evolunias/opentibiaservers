import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-reviews-server-sweden');
}

export default function VenoreotWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-reviews-server-sweden" />;
}
