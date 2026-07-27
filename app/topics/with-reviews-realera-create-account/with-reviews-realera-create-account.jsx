import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-create-account');
}

export default function WithReviewsRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-create-account" />;
}
