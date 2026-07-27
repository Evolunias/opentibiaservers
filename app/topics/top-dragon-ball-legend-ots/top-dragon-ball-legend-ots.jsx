import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-ots');
}

export default function TopDragonBallLegendOtsKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-ots" />;
}
