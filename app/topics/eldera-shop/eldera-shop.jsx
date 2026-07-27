import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-shop');
}

export default function ElderaShopKeywordPage() {
  return <StaticKeywordPage slug="eldera-shop" />;
}
