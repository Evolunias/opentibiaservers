import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-uptime');
}

export default function ArchlightUptimeKeywordPage() {
  return <StaticKeywordPage slug="archlight-uptime" />;
}
