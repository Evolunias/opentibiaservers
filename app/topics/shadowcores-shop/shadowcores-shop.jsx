import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-shop');
}

export default function ShadowcoresShopKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-shop" />;
}
