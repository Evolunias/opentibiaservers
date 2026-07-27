import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-14-baiak-server');
}

export default function DragonBallLegend14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-14-baiak-server" />;
}
