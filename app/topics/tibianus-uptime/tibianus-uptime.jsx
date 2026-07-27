import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-uptime');
}

export default function TibianusUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-uptime" />;
}
