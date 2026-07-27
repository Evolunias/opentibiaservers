import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-create-account');
}

export default function WithReviewsSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-create-account" />;
}
