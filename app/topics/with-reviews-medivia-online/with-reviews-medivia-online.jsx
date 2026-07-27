import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-online');
}

export default function WithReviewsMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-online" />;
}
