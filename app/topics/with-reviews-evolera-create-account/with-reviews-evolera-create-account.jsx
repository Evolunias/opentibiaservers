import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-create-account');
}

export default function WithReviewsEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-create-account" />;
}
