import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-rules');
}

export default function WithReviewsNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-rules" />;
}
