import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-shop');
}

export default function TibijkaShopKeywordPage() {
  return <StaticKeywordPage slug="tibijka-shop" />;
}
