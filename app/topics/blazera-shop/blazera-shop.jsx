import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-shop');
}

export default function BlazeraShopKeywordPage() {
  return <StaticKeywordPage slug="blazera-shop" />;
}
