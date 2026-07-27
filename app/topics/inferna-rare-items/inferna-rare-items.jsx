import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-rare-items');
}

export default function InfernaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="inferna-rare-items" />;
}
