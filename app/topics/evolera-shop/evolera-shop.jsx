import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-shop');
}

export default function EvoleraShopKeywordPage() {
  return <StaticKeywordPage slug="evolera-shop" />;
}
