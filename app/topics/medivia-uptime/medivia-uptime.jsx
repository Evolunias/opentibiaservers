import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-uptime');
}

export default function MediviaUptimeKeywordPage() {
  return <StaticKeywordPage slug="medivia-uptime" />;
}
