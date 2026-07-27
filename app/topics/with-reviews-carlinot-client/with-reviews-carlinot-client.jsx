import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-client');
}

export default function WithReviewsCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-client" />;
}
