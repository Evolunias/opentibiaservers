import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-uptime');
}

export default function DragonBallLegendUptimeKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-uptime" />;
}
