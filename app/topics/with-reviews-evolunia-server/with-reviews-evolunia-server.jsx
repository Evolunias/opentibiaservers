import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-server');
}

export default function WithReviewsEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-server" />;
}
