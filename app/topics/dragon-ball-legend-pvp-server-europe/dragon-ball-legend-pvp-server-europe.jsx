import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvp-server-europe');
}

export default function DragonBallLegendPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvp-server-europe" />;
}
