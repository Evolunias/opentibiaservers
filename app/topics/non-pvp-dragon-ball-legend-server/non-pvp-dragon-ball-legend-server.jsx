import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-dragon-ball-legend-server');
}

export default function NonPvpDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-dragon-ball-legend-server" />;
}
