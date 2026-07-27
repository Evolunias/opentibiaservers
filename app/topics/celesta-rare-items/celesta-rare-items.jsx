import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-rare-items');
}

export default function CelestaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="celesta-rare-items" />;
}
