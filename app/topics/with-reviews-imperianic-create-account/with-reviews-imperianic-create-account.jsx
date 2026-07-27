import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-create-account');
}

export default function WithReviewsImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-create-account" />;
}
