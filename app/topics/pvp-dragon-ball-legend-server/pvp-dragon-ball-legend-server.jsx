import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-dragon-ball-legend-server');
}

export default function PvpDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-dragon-ball-legend-server" />;
}
