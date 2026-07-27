import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-rare-items');
}

export default function KyraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="kyra-rare-items" />;
}
