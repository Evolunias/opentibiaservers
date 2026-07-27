import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-aurera-global-rules');
}

export default function WithReviewsAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-aurera-global-rules" />;
}
