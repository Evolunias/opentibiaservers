import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-official');
}

export default function ActiveDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-official" />;
}
