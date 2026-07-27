import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity');
}

export default function WithReviewsSerenityKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity" />;
}
