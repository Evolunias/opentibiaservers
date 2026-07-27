import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-shop');
}

export default function CalmeraOtShopKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-shop" />;
}
