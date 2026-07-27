import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-shop');
}

export default function ImperianicShopKeywordPage() {
  return <StaticKeywordPage slug="imperianic-shop" />;
}
