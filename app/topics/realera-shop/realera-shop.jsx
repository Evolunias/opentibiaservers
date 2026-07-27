import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-shop');
}

export default function RealeraShopKeywordPage() {
  return <StaticKeywordPage slug="realera-shop" />;
}
