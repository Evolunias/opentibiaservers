import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-rare-items');
}

export default function NeranaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="nerana-rare-items" />;
}
