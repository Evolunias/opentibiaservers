import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-tibia');
}

export default function OfficialDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-tibia" />;
}
