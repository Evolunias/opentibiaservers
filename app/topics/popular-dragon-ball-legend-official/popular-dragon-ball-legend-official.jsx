import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-official');
}

export default function PopularDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-official" />;
}
