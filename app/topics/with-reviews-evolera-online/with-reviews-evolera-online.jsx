import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-online');
}

export default function WithReviewsEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-online" />;
}
