import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-create-account');
}

export default function WithReviewsOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-create-account" />;
}
