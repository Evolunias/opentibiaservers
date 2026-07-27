import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-harmonia-ot-online');
}

export default function WithReviewsHarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-harmonia-ot-online" />;
}
