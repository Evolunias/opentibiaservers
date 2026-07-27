import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-ot-server');
}

export default function CustomDragonBallLegendOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-ot-server" />;
}
