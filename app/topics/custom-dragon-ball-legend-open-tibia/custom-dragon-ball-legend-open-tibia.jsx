import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-open-tibia');
}

export default function CustomDragonBallLegendOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-open-tibia" />;
}
