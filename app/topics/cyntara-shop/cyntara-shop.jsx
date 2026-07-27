import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-shop');
}

export default function CyntaraShopKeywordPage() {
  return <StaticKeywordPage slug="cyntara-shop" />;
}
