import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-uptime');
}

export default function AmeriaUptimeKeywordPage() {
  return <StaticKeywordPage slug="ameria-uptime" />;
}
