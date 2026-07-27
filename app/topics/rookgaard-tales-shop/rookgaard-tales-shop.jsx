import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-shop');
}

export default function RookgaardTalesShopKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-shop" />;
}
