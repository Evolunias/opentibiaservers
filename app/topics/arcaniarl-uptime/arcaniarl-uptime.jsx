import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-uptime');
}

export default function ArcaniarlUptimeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-uptime" />;
}
