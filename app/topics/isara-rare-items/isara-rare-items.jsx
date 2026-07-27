import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-rare-items');
}

export default function IsaraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="isara-rare-items" />;
}
