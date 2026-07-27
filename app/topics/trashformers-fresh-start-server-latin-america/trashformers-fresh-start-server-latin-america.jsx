import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-fresh-start-server-latin-america');
}

export default function TrashformersFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-fresh-start-server-latin-america" />;
}
