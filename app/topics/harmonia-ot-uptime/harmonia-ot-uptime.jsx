import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-uptime');
}

export default function HarmoniaOtUptimeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-uptime" />;
}
