import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-retro-server-north-america');
}

export default function DragonBallLegendRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-retro-server-north-america" />;
}
