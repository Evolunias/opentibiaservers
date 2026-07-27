import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-guide');
}

export default function WithReviewsSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-guide" />;
}
