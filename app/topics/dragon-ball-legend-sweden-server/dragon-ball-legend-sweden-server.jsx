import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-sweden-server');
}

export default function DragonBallLegendSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-sweden-server" />;
}
