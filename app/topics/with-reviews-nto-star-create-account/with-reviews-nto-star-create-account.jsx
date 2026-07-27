import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-create-account');
}

export default function WithReviewsNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-create-account" />;
}
