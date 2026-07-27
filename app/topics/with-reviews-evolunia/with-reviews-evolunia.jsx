import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia');
}

export default function WithReviewsEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia" />;
}
