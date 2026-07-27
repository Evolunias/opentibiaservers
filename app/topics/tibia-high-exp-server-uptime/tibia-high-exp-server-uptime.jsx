import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-uptime');
}

export default function TibiaHighExpServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-uptime" />;
}
