import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-shop');
}

export default function DragonBallLegendShopKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-shop" />;
}
