import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-rules');
}

export default function WithReviewsRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-rules" />;
}
