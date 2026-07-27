import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-server-mexico');
}

export default function DragonBallLegendCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-server-mexico" />;
}
