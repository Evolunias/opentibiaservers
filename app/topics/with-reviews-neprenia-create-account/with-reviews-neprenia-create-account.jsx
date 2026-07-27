import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-create-account');
}

export default function WithReviewsNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-create-account" />;
}
