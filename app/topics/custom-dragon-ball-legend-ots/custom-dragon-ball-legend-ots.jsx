import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-ots');
}

export default function CustomDragonBallLegendOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-ots" />;
}
