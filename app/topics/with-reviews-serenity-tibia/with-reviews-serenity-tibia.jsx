import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-tibia');
}

export default function WithReviewsSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-tibia" />;
}
