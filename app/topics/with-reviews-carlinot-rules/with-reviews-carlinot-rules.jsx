import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-rules');
}

export default function WithReviewsCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-rules" />;
}
