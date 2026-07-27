import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-tibia');
}

export default function WithReviewsImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-tibia" />;
}
