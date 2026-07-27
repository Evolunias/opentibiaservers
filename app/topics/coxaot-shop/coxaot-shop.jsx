import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-shop');
}

export default function CoxaotShopKeywordPage() {
  return <StaticKeywordPage slug="coxaot-shop" />;
}
