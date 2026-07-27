import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-shop');
}

export default function NilotShopKeywordPage() {
  return <StaticKeywordPage slug="nilot-shop" />;
}
