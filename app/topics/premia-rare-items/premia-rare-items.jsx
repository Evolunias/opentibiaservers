import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-rare-items');
}

export default function PremiaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="premia-rare-items" />;
}
