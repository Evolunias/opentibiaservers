import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-rare-items');
}

export default function SecuraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="secura-rare-items" />;
}
