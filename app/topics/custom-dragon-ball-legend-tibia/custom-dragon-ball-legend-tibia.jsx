import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-tibia');
}

export default function CustomDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-tibia" />;
}
