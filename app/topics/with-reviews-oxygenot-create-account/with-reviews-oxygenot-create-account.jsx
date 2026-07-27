import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-create-account');
}

export default function WithReviewsOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-create-account" />;
}
