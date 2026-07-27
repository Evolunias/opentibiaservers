import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-ots');
}

export default function WithReviewsEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-ots" />;
}
