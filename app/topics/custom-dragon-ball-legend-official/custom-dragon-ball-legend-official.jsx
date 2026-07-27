import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-official');
}

export default function CustomDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-official" />;
}
