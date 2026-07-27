import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-rules');
}

export default function WithReviewsArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-rules" />;
}
