import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-create-account');
}

export default function WithReviewsClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-create-account" />;
}
