import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-create-account');
}

export default function WithReviewsEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-create-account" />;
}
