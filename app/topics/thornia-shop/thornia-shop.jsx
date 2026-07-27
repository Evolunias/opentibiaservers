import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-shop');
}

export default function ThorniaShopKeywordPage() {
  return <StaticKeywordPage slug="thornia-shop" />;
}
