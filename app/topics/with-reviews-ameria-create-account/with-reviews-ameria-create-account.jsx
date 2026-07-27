import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-create-account');
}

export default function WithReviewsAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-create-account" />;
}
