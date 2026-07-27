import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-miracle-rules');
}

export default function WithReviewsMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-miracle-rules" />;
}
