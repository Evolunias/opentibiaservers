import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-create-account');
}

export default function WithReviewsOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-create-account" />;
}
