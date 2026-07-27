import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-tibia');
}

export default function WithReviewsArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-tibia" />;
}
