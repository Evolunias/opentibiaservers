import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-online');
}

export default function RealMapBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-online" />;
}
