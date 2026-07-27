import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-uptime');
}

export default function OtmadnessUptimeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-uptime" />;
}
