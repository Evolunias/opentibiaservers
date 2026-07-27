import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-uptime');
}

export default function EvoServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="evo-server-uptime" />;
}
