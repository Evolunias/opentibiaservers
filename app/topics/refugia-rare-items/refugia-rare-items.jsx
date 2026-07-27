import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-rare-items');
}

export default function RefugiaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="refugia-rare-items" />;
}
