import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-open-tibia');
}

export default function WithReviewsThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-open-tibia" />;
}
