import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-rare-items');
}

export default function DoleraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="dolera-rare-items" />;
}
