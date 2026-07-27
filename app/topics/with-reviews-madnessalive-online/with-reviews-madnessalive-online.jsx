import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-madnessalive-online');
}

export default function WithReviewsMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-madnessalive-online" />;
}
