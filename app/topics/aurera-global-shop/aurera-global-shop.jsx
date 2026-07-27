import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-shop');
}

export default function AureraGlobalShopKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-shop" />;
}
