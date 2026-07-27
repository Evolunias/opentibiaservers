import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-with-reviews-server');
}

export default function RuthlessChaos15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-with-reviews-server" />;
}
