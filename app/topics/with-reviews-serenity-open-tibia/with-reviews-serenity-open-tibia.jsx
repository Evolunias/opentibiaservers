import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-open-tibia');
}

export default function WithReviewsSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-open-tibia" />;
}
