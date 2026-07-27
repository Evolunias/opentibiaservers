import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-create-account');
}

export default function CustomDragonBallLegendCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-create-account" />;
}
