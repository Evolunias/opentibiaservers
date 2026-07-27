import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-shop');
}

export default function CanobShopKeywordPage() {
  return <StaticKeywordPage slug="canob-shop" />;
}
