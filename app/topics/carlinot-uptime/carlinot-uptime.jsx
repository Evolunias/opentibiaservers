import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-uptime');
}

export default function CarlinotUptimeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-uptime" />;
}
