import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-uptime');
}

export default function KasteriaUptimeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-uptime" />;
}
