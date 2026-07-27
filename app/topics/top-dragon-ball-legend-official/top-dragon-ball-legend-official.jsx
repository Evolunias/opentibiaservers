import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-official');
}

export default function TopDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-official" />;
}
