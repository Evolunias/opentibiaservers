import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-rules');
}

export default function WithReviewsSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-rules" />;
}
