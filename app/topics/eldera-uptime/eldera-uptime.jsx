import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-uptime');
}

export default function ElderaUptimeKeywordPage() {
  return <StaticKeywordPage slug="eldera-uptime" />;
}
