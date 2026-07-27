import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-shop');
}

export default function TibiaraShopKeywordPage() {
  return <StaticKeywordPage slug="tibiara-shop" />;
}
