import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-uptime');
}

export default function UnlineUptimeKeywordPage() {
  return <StaticKeywordPage slug="unline-uptime" />;
}
