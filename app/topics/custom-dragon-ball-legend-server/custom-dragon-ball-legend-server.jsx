import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-server');
}

export default function CustomDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-server" />;
}
