import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-ots');
}

export default function OfficialDragonBallLegendOtsKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-ots" />;
}
