import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-open-tibia');
}

export default function NewDragonBallLegendOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-open-tibia" />;
}
