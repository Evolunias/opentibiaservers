import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-uptime');
}

export default function RealeraUptimeKeywordPage() {
  return <StaticKeywordPage slug="realera-uptime" />;
}
