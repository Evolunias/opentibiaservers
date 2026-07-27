import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-server-canada');
}

export default function DragonBallLegendCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-server-canada" />;
}
