import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-create-account');
}

export default function WithReviewsKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-create-account" />;
}
