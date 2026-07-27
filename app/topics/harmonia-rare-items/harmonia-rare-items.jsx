import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-rare-items');
}

export default function HarmoniaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="harmonia-rare-items" />;
}
