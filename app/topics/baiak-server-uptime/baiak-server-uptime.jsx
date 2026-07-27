import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-uptime');
}

export default function BaiakServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-uptime" />;
}
