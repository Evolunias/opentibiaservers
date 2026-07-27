import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-shop');
}

export default function InfernalOtShopKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-shop" />;
}
