import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dragon-ball-legend');
}

export default function NoResetDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dragon-ball-legend" />;
}
