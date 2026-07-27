import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-rare-items');
}

export default function AnticaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="antica-rare-items" />;
}
