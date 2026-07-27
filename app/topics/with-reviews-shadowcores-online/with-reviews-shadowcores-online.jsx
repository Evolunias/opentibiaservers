import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-online');
}

export default function WithReviewsShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-online" />;
}
