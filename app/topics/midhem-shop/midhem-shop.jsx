import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-shop');
}

export default function MidhemShopKeywordPage() {
  return <StaticKeywordPage slug="midhem-shop" />;
}
