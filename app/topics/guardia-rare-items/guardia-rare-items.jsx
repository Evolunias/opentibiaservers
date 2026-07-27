import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-rare-items');
}

export default function GuardiaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="guardia-rare-items" />;
}
