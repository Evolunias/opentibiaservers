import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-uptime');
}

export default function ShadowcoresUptimeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-uptime" />;
}
