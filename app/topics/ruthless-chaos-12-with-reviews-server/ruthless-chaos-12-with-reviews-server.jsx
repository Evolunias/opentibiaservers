import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-12-with-reviews-server');
}

export default function RuthlessChaos12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-12-with-reviews-server" />;
}
