import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-rare-items');
}

export default function ObsidiaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="obsidia-rare-items" />;
}
