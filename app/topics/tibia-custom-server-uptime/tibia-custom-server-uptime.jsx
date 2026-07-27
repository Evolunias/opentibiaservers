import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-uptime');
}

export default function TibiaCustomServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-uptime" />;
}
