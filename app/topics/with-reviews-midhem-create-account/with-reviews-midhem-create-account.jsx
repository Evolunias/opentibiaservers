import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-create-account');
}

export default function WithReviewsMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-create-account" />;
}
