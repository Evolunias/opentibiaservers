import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-shop');
}

export default function MarolaotShopKeywordPage() {
  return <StaticKeywordPage slug="marolaot-shop" />;
}
