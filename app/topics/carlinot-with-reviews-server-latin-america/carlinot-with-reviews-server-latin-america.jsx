import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-reviews-server-latin-america');
}

export default function CarlinotWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-reviews-server-latin-america" />;
}
