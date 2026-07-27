import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-rare-items');
}

export default function IridiaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="iridia-rare-items" />;
}
