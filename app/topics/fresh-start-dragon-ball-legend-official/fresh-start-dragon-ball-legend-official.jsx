import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-official');
}

export default function FreshStartDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-official" />;
}
