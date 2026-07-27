import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-uptime');
}

export default function PvpEnforcedOtServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-uptime" />;
}
