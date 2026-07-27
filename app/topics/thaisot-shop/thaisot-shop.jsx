import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-shop');
}

export default function ThaisotShopKeywordPage() {
  return <StaticKeywordPage slug="thaisot-shop" />;
}
