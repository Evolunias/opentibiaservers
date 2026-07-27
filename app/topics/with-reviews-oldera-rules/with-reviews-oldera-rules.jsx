import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-rules');
}

export default function WithReviewsOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-rules" />;
}
