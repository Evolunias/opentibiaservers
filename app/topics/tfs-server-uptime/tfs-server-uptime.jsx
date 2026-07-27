import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-uptime');
}

export default function TfsServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-uptime" />;
}
