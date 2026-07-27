import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-tibia');
}

export default function WithReviewsSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-tibia" />;
}
