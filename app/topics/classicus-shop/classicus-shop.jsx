import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-shop');
}

export default function ClassicusShopKeywordPage() {
  return <StaticKeywordPage slug="classicus-shop" />;
}
