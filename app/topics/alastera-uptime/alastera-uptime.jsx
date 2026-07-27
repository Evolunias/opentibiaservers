import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-uptime');
}

export default function AlasteraUptimeKeywordPage() {
  return <StaticKeywordPage slug="alastera-uptime" />;
}
