import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-rules');
}

export default function WithReviewsRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-rules" />;
}
