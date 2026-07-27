import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-create-account');
}

export default function WithReviewsSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-create-account" />;
}
