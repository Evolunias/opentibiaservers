import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-uptime');
}

export default function Tibia74ServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-uptime" />;
}
