import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-uptime');
}

export default function NonPvpOtServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-uptime" />;
}
