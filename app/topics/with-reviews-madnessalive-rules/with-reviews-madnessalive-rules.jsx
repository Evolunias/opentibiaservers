import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-madnessalive-rules');
}

export default function WithReviewsMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-madnessalive-rules" />;
}
