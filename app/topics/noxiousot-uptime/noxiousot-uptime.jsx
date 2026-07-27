import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-uptime');
}

export default function NoxiousotUptimeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-uptime" />;
}
