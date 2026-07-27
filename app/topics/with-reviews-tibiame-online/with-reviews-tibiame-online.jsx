import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-online');
}

export default function WithReviewsTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-online" />;
}
