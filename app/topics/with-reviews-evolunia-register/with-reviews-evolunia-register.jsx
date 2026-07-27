import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-register');
}

export default function WithReviewsEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-register" />;
}
