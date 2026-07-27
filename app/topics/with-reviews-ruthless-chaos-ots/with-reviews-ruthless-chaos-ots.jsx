import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ruthless-chaos-ots');
}

export default function WithReviewsRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ruthless-chaos-ots" />;
}
