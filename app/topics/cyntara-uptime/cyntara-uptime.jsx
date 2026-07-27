import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-uptime');
}

export default function CyntaraUptimeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-uptime" />;
}
