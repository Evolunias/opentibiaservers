import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-vip');
}

export default function DragonBallLegendVipKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-vip" />;
}
