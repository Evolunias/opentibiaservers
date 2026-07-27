import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-infernal-ot-online');
}

export default function WithReviewsInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-infernal-ot-online" />;
}
