import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot-online');
}

export default function WithReviewsMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot-online" />;
}
