import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-shop');
}

export default function NostaltherShopKeywordPage() {
  return <StaticKeywordPage slug="nostalther-shop" />;
}
