import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-reviews-server-brazil');
}

export default function CarlinotWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-reviews-server-brazil" />;
}
