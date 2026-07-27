import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-tibia');
}

export default function WithReviewsThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-tibia" />;
}
