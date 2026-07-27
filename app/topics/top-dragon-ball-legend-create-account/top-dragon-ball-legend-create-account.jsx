import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-create-account');
}

export default function TopDragonBallLegendCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-create-account" />;
}
