import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-uptime');
}

export default function OlderaUptimeKeywordPage() {
  return <StaticKeywordPage slug="oldera-uptime" />;
}
