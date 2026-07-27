import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-uptime');
}

export default function ThaisotUptimeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-uptime" />;
}
