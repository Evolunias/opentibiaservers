import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-shop');
}

export default function AmeriaShopKeywordPage() {
  return <StaticKeywordPage slug="ameria-shop" />;
}
