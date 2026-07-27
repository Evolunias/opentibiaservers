import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-uptime');
}

export default function TibiaraUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-uptime" />;
}
