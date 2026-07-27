import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-online');
}

export default function TibiaRealMapServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-online" />;
}
