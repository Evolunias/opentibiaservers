import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-create-account');
}

export default function CurrentDragonBallLegendCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-create-account" />;
}
