import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-rules');
}

export default function WithReviewsKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-rules" />;
}
