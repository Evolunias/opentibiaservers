import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-ot-server');
}

export default function DragonBallLegendOtServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-ot-server" />;
}
