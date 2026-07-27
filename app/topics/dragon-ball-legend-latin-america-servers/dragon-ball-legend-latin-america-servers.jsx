import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-latin-america-servers');
}

export default function DragonBallLegendLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-latin-america-servers" />;
}
