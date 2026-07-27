import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-argentina-servers');
}

export default function DragonBallLegendArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-argentina-servers" />;
}
