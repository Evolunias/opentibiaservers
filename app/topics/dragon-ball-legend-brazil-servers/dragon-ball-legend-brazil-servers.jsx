import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-brazil-servers');
}

export default function DragonBallLegendBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-brazil-servers" />;
}
