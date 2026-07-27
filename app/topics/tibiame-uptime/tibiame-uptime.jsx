import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-uptime');
}

export default function TibiameUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-uptime" />;
}
