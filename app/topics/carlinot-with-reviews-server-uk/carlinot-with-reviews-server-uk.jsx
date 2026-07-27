import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-reviews-server-uk');
}

export default function CarlinotWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-reviews-server-uk" />;
}
