import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-chile-server');
}

export default function DragonBallLegendChileServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-chile-server" />;
}
