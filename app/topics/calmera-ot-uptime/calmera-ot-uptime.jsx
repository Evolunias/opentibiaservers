import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-uptime');
}

export default function CalmeraOtUptimeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-uptime" />;
}
