import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-create-account');
}

export default function DragonBallLegendCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-create-account" />;
}
