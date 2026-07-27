import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-reviews-server-france');
}

export default function CarlinotWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-reviews-server-france" />;
}
