import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-ot-server');
}

export default function OfficialDragonBallLegendOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-ot-server" />;
}
