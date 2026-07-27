import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-madnessalive-online');
}

export default function RealMapMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-madnessalive-online" />;
}
