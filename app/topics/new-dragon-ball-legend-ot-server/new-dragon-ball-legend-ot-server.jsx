import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-ot-server');
}

export default function NewDragonBallLegendOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-ot-server" />;
}
