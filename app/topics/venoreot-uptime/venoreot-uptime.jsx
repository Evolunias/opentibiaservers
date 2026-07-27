import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-uptime');
}

export default function VenoreotUptimeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-uptime" />;
}
