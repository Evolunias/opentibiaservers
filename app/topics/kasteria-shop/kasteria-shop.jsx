import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-shop');
}

export default function KasteriaShopKeywordPage() {
  return <StaticKeywordPage slug="kasteria-shop" />;
}
