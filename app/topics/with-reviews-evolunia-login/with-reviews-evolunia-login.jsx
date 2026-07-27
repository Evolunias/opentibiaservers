import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-login');
}

export default function WithReviewsEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-login" />;
}
