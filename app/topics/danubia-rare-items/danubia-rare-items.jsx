import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-rare-items');
}

export default function DanubiaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="danubia-rare-items" />;
}
