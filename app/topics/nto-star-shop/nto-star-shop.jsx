import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-shop');
}

export default function NtoStarShopKeywordPage() {
  return <StaticKeywordPage slug="nto-star-shop" />;
}
