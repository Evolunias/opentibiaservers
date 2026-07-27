import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-shop');
}

export default function ArcaniarlShopKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-shop" />;
}
