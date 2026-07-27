import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-chile-servers');
}

export default function DragonBallLegendChileServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-chile-servers" />;
}
