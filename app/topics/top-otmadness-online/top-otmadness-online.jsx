import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-online');
}

export default function TopOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-online" />;
}
