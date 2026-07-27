import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-online');
}

export default function WithReviewsAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-online" />;
}
