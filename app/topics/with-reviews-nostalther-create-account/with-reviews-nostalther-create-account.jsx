import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-create-account');
}

export default function WithReviewsNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-create-account" />;
}
