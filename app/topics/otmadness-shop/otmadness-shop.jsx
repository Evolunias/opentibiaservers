import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-shop');
}

export default function OtmadnessShopKeywordPage() {
  return <StaticKeywordPage slug="otmadness-shop" />;
}
