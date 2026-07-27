import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-reviews-server-germany');
}

export default function CarlinotWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-reviews-server-germany" />;
}
