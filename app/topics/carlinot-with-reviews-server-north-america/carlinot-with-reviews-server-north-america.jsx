import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-reviews-server-north-america');
}

export default function CarlinotWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-reviews-server-north-america" />;
}
