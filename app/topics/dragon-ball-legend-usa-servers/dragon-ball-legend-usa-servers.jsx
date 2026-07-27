import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-usa-servers');
}

export default function DragonBallLegendUsaServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-usa-servers" />;
}
