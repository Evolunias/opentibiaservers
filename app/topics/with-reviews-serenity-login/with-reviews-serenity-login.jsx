import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-login');
}

export default function WithReviewsSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-login" />;
}
