import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-france-server');
}

export default function DragonBallLegendFranceServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-france-server" />;
}
