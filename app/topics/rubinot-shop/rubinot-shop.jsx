import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-shop');
}

export default function RubinotShopKeywordPage() {
  return <StaticKeywordPage slug="rubinot-shop" />;
}
