import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-shop');
}

export default function EmpirebrShopKeywordPage() {
  return <StaticKeywordPage slug="empirebr-shop" />;
}
