import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-uptime');
}

export default function MarolaotUptimeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-uptime" />;
}
