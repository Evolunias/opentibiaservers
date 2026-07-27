import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-shop');
}

export default function NoxiousotShopKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-shop" />;
}
