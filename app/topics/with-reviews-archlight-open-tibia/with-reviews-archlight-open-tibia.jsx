import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-open-tibia');
}

export default function WithReviewsArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-open-tibia" />;
}
