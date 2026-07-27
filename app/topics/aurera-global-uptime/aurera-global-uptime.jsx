import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-uptime');
}

export default function AureraGlobalUptimeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-uptime" />;
}
