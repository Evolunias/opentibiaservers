import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-rare-items');
}

export default function EterniaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="eternia-rare-items" />;
}
