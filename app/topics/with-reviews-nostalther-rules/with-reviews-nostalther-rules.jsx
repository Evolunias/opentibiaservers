import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-rules');
}

export default function WithReviewsNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-rules" />;
}
