import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-15-pvp-enforced-server');
}

export default function DragonBallLegend15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-15-pvp-enforced-server" />;
}
