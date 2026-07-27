import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-uptime');
}

export default function OxygenotUptimeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-uptime" />;
}
