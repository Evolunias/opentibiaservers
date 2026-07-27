import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-online');
}

export default function CustomOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-online" />;
}
