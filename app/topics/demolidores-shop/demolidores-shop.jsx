import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-shop');
}

export default function DemolidoresShopKeywordPage() {
  return <StaticKeywordPage slug="demolidores-shop" />;
}
