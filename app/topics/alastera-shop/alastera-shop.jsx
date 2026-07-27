import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-shop');
}

export default function AlasteraShopKeywordPage() {
  return <StaticKeywordPage slug="alastera-shop" />;
}
