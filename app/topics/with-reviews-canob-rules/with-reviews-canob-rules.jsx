import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-rules');
}

export default function WithReviewsCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-rules" />;
}
