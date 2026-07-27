import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-brazil-server');
}

export default function DragonBallLegendBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-brazil-server" />;
}
