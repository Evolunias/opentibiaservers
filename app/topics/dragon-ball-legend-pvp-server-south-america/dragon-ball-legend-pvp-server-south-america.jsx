import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvp-server-south-america');
}

export default function DragonBallLegendPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvp-server-south-america" />;
}
