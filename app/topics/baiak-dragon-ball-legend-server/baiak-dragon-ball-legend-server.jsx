import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-dragon-ball-legend-server');
}

export default function BaiakDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-dragon-ball-legend-server" />;
}
