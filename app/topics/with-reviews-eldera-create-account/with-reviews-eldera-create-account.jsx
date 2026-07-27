import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-create-account');
}

export default function WithReviewsElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-create-account" />;
}
