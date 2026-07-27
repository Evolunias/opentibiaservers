import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-shop');
}

export default function TibiantisShopKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-shop" />;
}
