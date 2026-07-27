import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-tibia');
}

export default function WithReviewsNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-tibia" />;
}
