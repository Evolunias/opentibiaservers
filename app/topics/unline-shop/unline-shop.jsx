import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-shop');
}

export default function UnlineShopKeywordPage() {
  return <StaticKeywordPage slug="unline-shop" />;
}
