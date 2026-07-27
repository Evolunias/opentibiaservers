import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-retro-server-mexico');
}

export default function DragonBallLegendRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-retro-server-mexico" />;
}
