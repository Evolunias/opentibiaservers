import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-baiak-server-argentina');
}

export default function DragonBallLegendBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-baiak-server-argentina" />;
}
