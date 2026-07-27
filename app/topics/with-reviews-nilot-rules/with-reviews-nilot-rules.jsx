import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-rules');
}

export default function WithReviewsNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-rules" />;
}
