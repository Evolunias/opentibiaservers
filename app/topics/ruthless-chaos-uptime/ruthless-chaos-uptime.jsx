import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-uptime');
}

export default function RuthlessChaosUptimeKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-uptime" />;
}
