import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-online');
}

export default function OfficialOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-online" />;
}
