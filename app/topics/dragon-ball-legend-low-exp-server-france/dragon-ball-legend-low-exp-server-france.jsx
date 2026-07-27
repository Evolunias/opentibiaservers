import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-low-exp-server-france');
}

export default function DragonBallLegendLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-low-exp-server-france" />;
}
