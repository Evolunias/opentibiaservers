import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-create-account');
}

export default function WithReviewsCoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-create-account" />;
}
