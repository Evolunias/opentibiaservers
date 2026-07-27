import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-uptime');
}

export default function EvoleraUptimeKeywordPage() {
  return <StaticKeywordPage slug="evolera-uptime" />;
}
