import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-originaltibia-server');
}

export default function WithReviewsOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-originaltibia-server" />;
}
