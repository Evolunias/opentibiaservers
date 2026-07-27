import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-miracle-online');
}

export default function WithReviewsMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-miracle-online" />;
}
