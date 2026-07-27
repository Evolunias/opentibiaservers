import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-uptime');
}

export default function TibiaOtServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-uptime" />;
}
