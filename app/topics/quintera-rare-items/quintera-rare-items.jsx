import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-rare-items');
}

export default function QuinteraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="quintera-rare-items" />;
}
