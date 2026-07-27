import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-shop');
}

export default function OlderaShopKeywordPage() {
  return <StaticKeywordPage slug="oldera-shop" />;
}
