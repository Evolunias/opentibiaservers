import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-uptime');
}

export default function OtlandServerGalaUptimeKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-uptime" />;
}
