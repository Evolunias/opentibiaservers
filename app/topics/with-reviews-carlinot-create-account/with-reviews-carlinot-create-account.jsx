import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-create-account');
}

export default function WithReviewsCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-create-account" />;
}
