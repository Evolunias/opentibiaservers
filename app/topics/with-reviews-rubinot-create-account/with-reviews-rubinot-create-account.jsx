import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-create-account');
}

export default function WithReviewsRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-create-account" />;
}
