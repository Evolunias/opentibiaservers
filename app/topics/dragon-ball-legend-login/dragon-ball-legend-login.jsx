import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-login');
}

export default function DragonBallLegendLoginKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-login" />;
}
