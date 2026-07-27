import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-create-account');
}

export default function ActiveDragonBallLegendCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-create-account" />;
}
