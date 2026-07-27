import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-open-tibia');
}

export default function WithReviewsEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-open-tibia" />;
}
