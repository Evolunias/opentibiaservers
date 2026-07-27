import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-7-1-non-pvp-server');
}

export default function DragonBallLegend71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-7-1-non-pvp-server" />;
}
