import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-uptime');
}

export default function DemolidoresUptimeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-uptime" />;
}
