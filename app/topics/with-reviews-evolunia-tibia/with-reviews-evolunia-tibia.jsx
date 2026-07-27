import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-tibia');
}

export default function WithReviewsEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-tibia" />;
}
