import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-create-account');
}

export default function WithReviewsBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-create-account" />;
}
