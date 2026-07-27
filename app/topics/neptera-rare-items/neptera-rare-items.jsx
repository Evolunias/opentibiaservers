import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-rare-items');
}

export default function NepteraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="neptera-rare-items" />;
}
