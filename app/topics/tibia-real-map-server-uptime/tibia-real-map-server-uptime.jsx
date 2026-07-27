import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-uptime');
}

export default function TibiaRealMapServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-uptime" />;
}
