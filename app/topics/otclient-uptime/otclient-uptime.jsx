import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-uptime');
}

export default function OtclientUptimeKeywordPage() {
  return <StaticKeywordPage slug="otclient-uptime" />;
}
