import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-dragon-ball-legend-server');
}

export default function PvpeDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-dragon-ball-legend-server" />;
}
