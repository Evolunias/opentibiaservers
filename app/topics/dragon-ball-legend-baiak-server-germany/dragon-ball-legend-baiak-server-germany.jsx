import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-baiak-server-germany');
}

export default function DragonBallLegendBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-baiak-server-germany" />;
}
