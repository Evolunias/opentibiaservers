import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-online');
}

export default function WithReviewsThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-online" />;
}
