import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-mist-of-death-open-tibia');
}

export default function WithReviewsMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-mist-of-death-open-tibia" />;
}
