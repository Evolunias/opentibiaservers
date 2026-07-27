import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-server-brazil');
}

export default function DragonBallLegendCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-server-brazil" />;
}
