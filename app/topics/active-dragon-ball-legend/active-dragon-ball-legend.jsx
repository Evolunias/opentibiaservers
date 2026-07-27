import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend');
}

export default function ActiveDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend" />;
}
