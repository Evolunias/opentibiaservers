import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-uptime');
}

export default function CoxaotUptimeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-uptime" />;
}
