import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-baiak-ilusion-open-tibia');
}

export default function WithReviewsBaiakIlusionOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-baiak-ilusion-open-tibia" />;
}
