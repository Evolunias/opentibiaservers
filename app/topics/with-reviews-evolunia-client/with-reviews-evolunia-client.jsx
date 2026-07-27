import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-client');
}

export default function WithReviewsEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-client" />;
}
