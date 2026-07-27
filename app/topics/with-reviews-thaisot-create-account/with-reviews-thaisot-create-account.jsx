import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-create-account');
}

export default function WithReviewsThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-create-account" />;
}
