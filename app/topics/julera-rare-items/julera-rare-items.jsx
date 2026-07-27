import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-rare-items');
}

export default function JuleraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="julera-rare-items" />;
}
