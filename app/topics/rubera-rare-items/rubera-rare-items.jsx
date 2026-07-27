import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-rare-items');
}

export default function RuberaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="rubera-rare-items" />;
}
