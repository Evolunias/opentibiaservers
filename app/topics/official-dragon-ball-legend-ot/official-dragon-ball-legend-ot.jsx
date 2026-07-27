import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-ot');
}

export default function OfficialDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-ot" />;
}
