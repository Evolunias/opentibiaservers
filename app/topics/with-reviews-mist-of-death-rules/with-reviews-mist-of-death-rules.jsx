import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-mist-of-death-rules');
}

export default function WithReviewsMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-mist-of-death-rules" />;
}
