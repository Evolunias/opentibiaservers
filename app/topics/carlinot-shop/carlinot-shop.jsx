import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-shop');
}

export default function CarlinotShopKeywordPage() {
  return <StaticKeywordPage slug="carlinot-shop" />;
}
