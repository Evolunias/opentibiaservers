import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-retro-server-sweden');
}

export default function DragonBallLegendRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-retro-server-sweden" />;
}
