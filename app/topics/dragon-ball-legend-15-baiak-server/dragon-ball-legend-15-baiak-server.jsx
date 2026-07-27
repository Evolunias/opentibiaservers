import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-15-baiak-server');
}

export default function DragonBallLegend15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-15-baiak-server" />;
}
