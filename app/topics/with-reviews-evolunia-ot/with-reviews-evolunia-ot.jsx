import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-ot');
}

export default function WithReviewsEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-ot" />;
}
