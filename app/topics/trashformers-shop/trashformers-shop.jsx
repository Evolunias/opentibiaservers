import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-shop');
}

export default function TrashformersShopKeywordPage() {
  return <StaticKeywordPage slug="trashformers-shop" />;
}
