import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-reviews-server-canada');
}

export default function CarlinotWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-reviews-server-canada" />;
}
