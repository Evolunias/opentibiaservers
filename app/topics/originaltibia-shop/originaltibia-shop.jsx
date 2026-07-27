import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-shop');
}

export default function OriginaltibiaShopKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-shop" />;
}
