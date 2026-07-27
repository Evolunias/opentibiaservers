import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-online');
}

export default function LowrateOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-online" />;
}
