import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-empirebr-online');
}

export default function WithReviewsEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-empirebr-online" />;
}
