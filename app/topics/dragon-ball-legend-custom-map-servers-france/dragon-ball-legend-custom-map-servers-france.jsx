import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-servers-france');
}

export default function DragonBallLegendCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-servers-france" />;
}
