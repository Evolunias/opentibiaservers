import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-create-account');
}

export default function WithReviewsNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-create-account" />;
}
