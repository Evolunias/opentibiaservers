import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-france');
}

export default function DragonBallLegendPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-france" />;
}
