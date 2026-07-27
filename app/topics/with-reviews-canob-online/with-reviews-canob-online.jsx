import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-online');
}

export default function WithReviewsCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-online" />;
}
