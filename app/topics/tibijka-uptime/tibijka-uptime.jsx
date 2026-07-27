import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-uptime');
}

export default function TibijkaUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-uptime" />;
}
