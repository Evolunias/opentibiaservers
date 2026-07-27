import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-uptime');
}

export default function RealestaUptimeKeywordPage() {
  return <StaticKeywordPage slug="realesta-uptime" />;
}
