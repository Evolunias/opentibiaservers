import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-open-tibia');
}

export default function WithReviewsSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-open-tibia" />;
}
