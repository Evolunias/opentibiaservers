import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-uptime');
}

export default function MiracleUptimeKeywordPage() {
  return <StaticKeywordPage slug="miracle-uptime" />;
}
