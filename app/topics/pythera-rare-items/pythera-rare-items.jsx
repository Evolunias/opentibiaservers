import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-rare-items');
}

export default function PytheraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="pythera-rare-items" />;
}
