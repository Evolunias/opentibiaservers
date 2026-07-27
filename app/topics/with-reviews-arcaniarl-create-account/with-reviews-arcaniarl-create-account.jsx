import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-create-account');
}

export default function WithReviewsArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-create-account" />;
}
