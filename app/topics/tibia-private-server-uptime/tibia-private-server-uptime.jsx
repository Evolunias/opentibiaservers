import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-uptime');
}

export default function TibiaPrivateServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-uptime" />;
}
