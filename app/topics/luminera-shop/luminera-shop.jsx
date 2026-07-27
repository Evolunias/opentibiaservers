import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-shop');
}

export default function LumineraShopKeywordPage() {
  return <StaticKeywordPage slug="luminera-shop" />;
}
