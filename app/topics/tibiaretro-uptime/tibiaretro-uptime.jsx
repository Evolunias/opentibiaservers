import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-uptime');
}

export default function TibiaretroUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-uptime" />;
}
