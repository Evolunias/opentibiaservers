import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-uptime');
}

export default function BaiakIlusionUptimeKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-uptime" />;
}
