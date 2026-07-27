import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-open-tibia');
}

export default function WithReviewsNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-open-tibia" />;
}
