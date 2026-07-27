import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-uptime');
}

export default function EmpirebrUptimeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-uptime" />;
}
