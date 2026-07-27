import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-rare-items');
}

export default function VineraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="vinera-rare-items" />;
}
