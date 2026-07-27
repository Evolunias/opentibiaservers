import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-rules');
}

export default function WithReviewsEvoleraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-rules" />;
}
