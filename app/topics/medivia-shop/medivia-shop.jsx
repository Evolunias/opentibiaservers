import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-shop');
}

export default function MediviaShopKeywordPage() {
  return <StaticKeywordPage slug="medivia-shop" />;
}
