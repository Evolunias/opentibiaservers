import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-france-servers');
}

export default function DragonBallLegendFranceServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-france-servers" />;
}
