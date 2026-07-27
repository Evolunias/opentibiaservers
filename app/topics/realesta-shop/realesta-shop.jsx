import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-shop');
}

export default function RealestaShopKeywordPage() {
  return <StaticKeywordPage slug="realesta-shop" />;
}
