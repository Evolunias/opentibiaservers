import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-create-account');
}

export default function WithReviewsAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-create-account" />;
}
