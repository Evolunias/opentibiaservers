import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-uptime');
}

export default function OtlandUptimeKeywordPage() {
  return <StaticKeywordPage slug="otland-uptime" />;
}
