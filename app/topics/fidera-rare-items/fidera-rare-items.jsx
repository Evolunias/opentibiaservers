import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-rare-items');
}

export default function FideraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="fidera-rare-items" />;
}
