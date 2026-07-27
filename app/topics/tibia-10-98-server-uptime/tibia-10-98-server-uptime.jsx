import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-server-uptime');
}

export default function Tibia1098ServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-server-uptime" />;
}
