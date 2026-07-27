import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-baiak-ilusion-online');
}

export default function WithReviewsBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-baiak-ilusion-online" />;
}
