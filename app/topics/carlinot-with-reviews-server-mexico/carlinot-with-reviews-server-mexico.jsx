import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-reviews-server-mexico');
}

export default function CarlinotWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-reviews-server-mexico" />;
}
