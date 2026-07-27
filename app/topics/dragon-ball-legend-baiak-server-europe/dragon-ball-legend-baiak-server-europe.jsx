import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-baiak-server-europe');
}

export default function DragonBallLegendBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-baiak-server-europe" />;
}
