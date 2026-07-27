import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-rules');
}

export default function WithReviewsAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-rules" />;
}
