import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-rare-items');
}

export default function TrimeraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="trimera-rare-items" />;
}
