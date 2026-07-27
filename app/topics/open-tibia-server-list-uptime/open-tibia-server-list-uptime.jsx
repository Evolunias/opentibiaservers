import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-uptime');
}

export default function OpenTibiaServerListUptimeKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-uptime" />;
}
