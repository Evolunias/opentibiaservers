import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-aurera-global-online');
}

export default function WithReviewsAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-aurera-global-online" />;
}
