import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-shop');
}

export default function DuraOnlineShopKeywordPage() {
  return <StaticKeywordPage slug="dura-online-shop" />;
}
