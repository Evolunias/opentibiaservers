import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-rare-items');
}

export default function OceraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="ocera-rare-items" />;
}
