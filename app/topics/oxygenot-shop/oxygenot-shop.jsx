import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-shop');
}

export default function OxygenotShopKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-shop" />;
}
