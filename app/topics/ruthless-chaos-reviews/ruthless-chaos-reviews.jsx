import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-reviews');
}

export default function RuthlessChaosReviewsKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-reviews" />;
}
