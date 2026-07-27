import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-online');
}

export default function WithReviewsSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-online" />;
}
