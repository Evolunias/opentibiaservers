import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-create-account');
}

export default function WithReviewsRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-create-account" />;
}
