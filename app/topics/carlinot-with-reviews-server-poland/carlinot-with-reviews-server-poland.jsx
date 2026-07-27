import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-reviews-server-poland');
}

export default function CarlinotWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-reviews-server-poland" />;
}
