import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-rules');
}

export default function WithReviewsRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-rules" />;
}
