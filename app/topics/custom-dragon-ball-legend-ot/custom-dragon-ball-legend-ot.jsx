import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-ot');
}

export default function CustomDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-ot" />;
}
