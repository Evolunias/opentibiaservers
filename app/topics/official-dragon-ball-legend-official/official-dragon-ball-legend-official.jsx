import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-official');
}

export default function OfficialDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-official" />;
}
