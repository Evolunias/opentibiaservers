import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-create-account');
}

export default function WithReviewsCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-create-account" />;
}
