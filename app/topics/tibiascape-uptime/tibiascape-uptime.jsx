import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-uptime');
}

export default function TibiascapeUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-uptime" />;
}
