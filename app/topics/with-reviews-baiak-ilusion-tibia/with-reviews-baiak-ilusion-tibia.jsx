import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-baiak-ilusion-tibia');
}

export default function WithReviewsBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-baiak-ilusion-tibia" />;
}
