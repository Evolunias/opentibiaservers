import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-baiak-server-poland');
}

export default function DragonBallLegendBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-baiak-server-poland" />;
}
