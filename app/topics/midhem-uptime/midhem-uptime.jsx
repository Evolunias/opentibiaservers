import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-uptime');
}

export default function MidhemUptimeKeywordPage() {
  return <StaticKeywordPage slug="midhem-uptime" />;
}
