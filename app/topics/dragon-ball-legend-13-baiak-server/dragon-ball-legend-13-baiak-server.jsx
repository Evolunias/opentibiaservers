import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-13-baiak-server');
}

export default function DragonBallLegend13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-13-baiak-server" />;
}
