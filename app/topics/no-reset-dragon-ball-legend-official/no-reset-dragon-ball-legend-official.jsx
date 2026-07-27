import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dragon-ball-legend-official');
}

export default function NoResetDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dragon-ball-legend-official" />;
}
