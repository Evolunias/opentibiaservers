import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-uptime');
}

export default function Tibia86ServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-uptime" />;
}
