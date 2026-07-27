import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-create-account');
}

export default function WithReviewsThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-create-account" />;
}
