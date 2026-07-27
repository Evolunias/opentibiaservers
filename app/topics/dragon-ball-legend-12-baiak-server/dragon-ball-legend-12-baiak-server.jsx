import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-12-baiak-server');
}

export default function DragonBallLegend12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-12-baiak-server" />;
}
