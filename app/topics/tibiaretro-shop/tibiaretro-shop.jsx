import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-shop');
}

export default function TibiaretroShopKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-shop" />;
}
