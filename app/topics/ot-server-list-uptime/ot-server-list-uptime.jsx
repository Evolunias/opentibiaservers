import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-uptime');
}

export default function OtServerListUptimeKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-uptime" />;
}
