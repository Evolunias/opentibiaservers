import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-non-pvp-server-europe');
}

export default function DragonBallLegendNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-non-pvp-server-europe" />;
}
