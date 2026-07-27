import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-usa-server');
}

export default function DragonBallLegendUsaServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-usa-server" />;
}
