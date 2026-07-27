import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-reviews-server-europe');
}

export default function CarlinotWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-reviews-server-europe" />;
}
