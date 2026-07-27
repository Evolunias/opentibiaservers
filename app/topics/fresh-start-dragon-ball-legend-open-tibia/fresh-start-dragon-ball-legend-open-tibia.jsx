import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-open-tibia');
}

export default function FreshStartDragonBallLegendOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-open-tibia" />;
}
