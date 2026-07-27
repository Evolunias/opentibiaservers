import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-shop');
}

export default function HarmoniaOtShopKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-shop" />;
}
