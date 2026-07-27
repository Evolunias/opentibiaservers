import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-online');
}

export default function WithReviewsCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-online" />;
}
