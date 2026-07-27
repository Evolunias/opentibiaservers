import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-rules');
}

export default function WithReviewsThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-rules" />;
}
