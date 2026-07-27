import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-uptime');
}

export default function DuraOnlineUptimeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-uptime" />;
}
