import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-shop');
}

export default function SabrehavenShopKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-shop" />;
}
