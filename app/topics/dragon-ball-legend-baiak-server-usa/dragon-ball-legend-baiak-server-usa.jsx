import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-baiak-server-usa');
}

export default function DragonBallLegendBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-baiak-server-usa" />;
}
