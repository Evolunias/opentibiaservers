import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-client');
}

export default function WithReviewsRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-client" />;
}
