import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-rare-items');
}

export default function EleraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="elera-rare-items" />;
}
