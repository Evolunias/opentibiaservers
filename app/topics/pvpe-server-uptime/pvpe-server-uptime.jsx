import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-uptime');
}

export default function PvpeServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-uptime" />;
}
