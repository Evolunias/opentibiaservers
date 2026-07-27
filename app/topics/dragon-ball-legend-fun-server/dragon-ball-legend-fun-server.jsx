import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-fun-server');
}

export default function DragonBallLegendFunServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-fun-server" />;
}
