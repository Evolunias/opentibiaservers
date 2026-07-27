import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-online');
}

export default function RealMapOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-online" />;
}
