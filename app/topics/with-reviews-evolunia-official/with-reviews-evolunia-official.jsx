import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-official');
}

export default function WithReviewsEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-official" />;
}
