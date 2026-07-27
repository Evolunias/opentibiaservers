import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-online');
}

export default function WithReviewsSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-online" />;
}
