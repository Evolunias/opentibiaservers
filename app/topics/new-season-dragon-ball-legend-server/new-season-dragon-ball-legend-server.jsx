import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dragon-ball-legend-server');
}

export default function NewSeasonDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-dragon-ball-legend-server" />;
}
