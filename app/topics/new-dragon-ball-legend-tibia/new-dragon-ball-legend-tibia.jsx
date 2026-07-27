import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-tibia');
}

export default function NewDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-tibia" />;
}
