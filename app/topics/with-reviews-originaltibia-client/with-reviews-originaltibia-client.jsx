import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-originaltibia-client');
}

export default function WithReviewsOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-originaltibia-client" />;
}
