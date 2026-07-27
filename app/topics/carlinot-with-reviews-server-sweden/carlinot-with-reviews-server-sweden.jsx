import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-reviews-server-sweden');
}

export default function CarlinotWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-reviews-server-sweden" />;
}
