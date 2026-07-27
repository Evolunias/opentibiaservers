import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-create-account');
}

export default function WithReviewsLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-create-account" />;
}
