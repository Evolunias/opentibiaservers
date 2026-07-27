import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-argentina-server');
}

export default function DragonBallLegendArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-argentina-server" />;
}
