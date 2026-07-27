import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-rules');
}

export default function WithReviewsThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-rules" />;
}
