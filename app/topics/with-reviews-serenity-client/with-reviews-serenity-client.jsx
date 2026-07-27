import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-client');
}

export default function WithReviewsSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-client" />;
}
