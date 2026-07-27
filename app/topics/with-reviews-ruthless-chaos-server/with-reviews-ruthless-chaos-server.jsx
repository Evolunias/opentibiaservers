import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ruthless-chaos-server');
}

export default function WithReviewsRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ruthless-chaos-server" />;
}
