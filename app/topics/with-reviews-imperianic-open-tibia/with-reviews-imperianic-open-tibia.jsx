import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-open-tibia');
}

export default function WithReviewsImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-open-tibia" />;
}
