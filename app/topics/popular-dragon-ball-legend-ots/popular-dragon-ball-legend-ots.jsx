import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-ots');
}

export default function PopularDragonBallLegendOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-ots" />;
}
