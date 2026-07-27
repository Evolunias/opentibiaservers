import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-create-account');
}

export default function PopularDragonBallLegendCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-create-account" />;
}
