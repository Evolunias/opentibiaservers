import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-online');
}

export default function WithReviewsClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-online" />;
}
