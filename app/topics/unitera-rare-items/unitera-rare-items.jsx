import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-rare-items');
}

export default function UniteraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="unitera-rare-items" />;
}
