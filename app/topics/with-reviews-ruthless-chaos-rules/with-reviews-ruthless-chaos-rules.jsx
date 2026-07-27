import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ruthless-chaos-rules');
}

export default function WithReviewsRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ruthless-chaos-rules" />;
}
