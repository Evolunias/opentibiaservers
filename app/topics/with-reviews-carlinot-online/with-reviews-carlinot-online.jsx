import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-online');
}

export default function WithReviewsCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-online" />;
}
