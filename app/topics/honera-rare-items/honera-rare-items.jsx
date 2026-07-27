import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-rare-items');
}

export default function HoneraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="honera-rare-items" />;
}
