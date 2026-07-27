import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-open-tibia');
}

export default function WithReviewsAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-open-tibia" />;
}
