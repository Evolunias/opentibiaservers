import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-uptime');
}

export default function Tibia13ServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-uptime" />;
}
