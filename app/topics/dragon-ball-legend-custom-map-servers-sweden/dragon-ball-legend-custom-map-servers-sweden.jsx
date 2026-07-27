import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-servers-sweden');
}

export default function DragonBallLegendCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-servers-sweden" />;
}
