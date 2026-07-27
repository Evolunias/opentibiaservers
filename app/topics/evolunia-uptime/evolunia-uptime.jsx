import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-uptime');
}

export default function EvoluniaUptimeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-uptime" />;
}
