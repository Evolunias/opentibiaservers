import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-rules');
}

export default function WithReviewsOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-rules" />;
}
