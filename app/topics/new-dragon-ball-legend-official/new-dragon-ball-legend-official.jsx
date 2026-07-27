import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-official');
}

export default function NewDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-official" />;
}
