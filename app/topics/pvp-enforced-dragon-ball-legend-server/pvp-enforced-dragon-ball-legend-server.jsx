import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-dragon-ball-legend-server');
}

export default function PvpEnforcedDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-dragon-ball-legend-server" />;
}
