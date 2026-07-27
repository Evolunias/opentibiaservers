import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-11-baiak-server');
}

export default function DragonBallLegend11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-11-baiak-server" />;
}
