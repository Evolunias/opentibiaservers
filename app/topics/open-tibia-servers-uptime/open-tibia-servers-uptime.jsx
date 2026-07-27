import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-uptime');
}

export default function OpenTibiaServersUptimeKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-uptime" />;
}
