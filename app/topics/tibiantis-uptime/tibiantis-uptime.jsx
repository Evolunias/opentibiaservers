import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-uptime');
}

export default function TibiantisUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-uptime" />;
}
