import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-create-account');
}

export default function WithReviewsCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-create-account" />;
}
