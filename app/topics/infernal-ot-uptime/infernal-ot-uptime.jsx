import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-uptime');
}

export default function InfernalOtUptimeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-uptime" />;
}
