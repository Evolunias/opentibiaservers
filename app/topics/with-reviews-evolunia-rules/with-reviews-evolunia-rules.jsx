import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-rules');
}

export default function WithReviewsEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-rules" />;
}
