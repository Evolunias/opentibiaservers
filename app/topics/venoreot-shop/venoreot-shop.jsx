import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-shop');
}

export default function VenoreotShopKeywordPage() {
  return <StaticKeywordPage slug="venoreot-shop" />;
}
