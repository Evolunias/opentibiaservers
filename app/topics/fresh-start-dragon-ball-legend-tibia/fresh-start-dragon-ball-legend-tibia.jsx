import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-tibia');
}

export default function FreshStartDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-tibia" />;
}
