import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dragon-ball-legend-ot');
}

export default function NoResetDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dragon-ball-legend-ot" />;
}
