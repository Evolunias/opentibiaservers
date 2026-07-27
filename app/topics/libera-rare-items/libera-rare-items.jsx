import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-rare-items');
}

export default function LiberaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="libera-rare-items" />;
}
