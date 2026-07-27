import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-create-account');
}

export default function WithReviewsArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-create-account" />;
}
