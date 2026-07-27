import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-online');
}

export default function WithReviewsElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-online" />;
}
