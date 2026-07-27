import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-online');
}

export default function BestOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-online" />;
}
