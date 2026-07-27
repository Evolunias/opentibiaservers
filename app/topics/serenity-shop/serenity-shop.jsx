import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-shop');
}

export default function SerenityShopKeywordPage() {
  return <StaticKeywordPage slug="serenity-shop" />;
}
