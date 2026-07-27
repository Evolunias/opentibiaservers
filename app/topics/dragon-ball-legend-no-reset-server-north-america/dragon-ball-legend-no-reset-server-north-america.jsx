import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-no-reset-server-north-america');
}

export default function DragonBallLegendNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-no-reset-server-north-america" />;
}
