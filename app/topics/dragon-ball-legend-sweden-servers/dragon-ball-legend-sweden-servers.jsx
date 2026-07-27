import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-sweden-servers');
}

export default function DragonBallLegendSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-sweden-servers" />;
}
