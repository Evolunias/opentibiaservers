import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-rare-items');
}

export default function LuceraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="lucera-rare-items" />;
}
