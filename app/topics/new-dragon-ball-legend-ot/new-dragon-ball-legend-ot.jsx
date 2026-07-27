import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-ot');
}

export default function NewDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-ot" />;
}
