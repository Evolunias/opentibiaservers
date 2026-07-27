import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-latin-america-server');
}

export default function DragonBallLegendLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-latin-america-server" />;
}
