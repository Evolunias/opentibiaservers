import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-reviews-server-usa');
}

export default function CarlinotWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-reviews-server-usa" />;
}
