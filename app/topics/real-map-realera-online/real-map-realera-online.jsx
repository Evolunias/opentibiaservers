import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-online');
}

export default function RealMapRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-online" />;
}
