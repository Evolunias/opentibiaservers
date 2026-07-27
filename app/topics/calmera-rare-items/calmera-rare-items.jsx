import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-rare-items');
}

export default function CalmeraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="calmera-rare-items" />;
}
