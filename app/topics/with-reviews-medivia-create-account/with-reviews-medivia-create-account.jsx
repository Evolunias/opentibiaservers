import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-create-account');
}

export default function WithReviewsMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-create-account" />;
}
