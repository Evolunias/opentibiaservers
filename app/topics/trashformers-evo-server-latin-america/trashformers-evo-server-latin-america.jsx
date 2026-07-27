import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-server-latin-america');
}

export default function TrashformersEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-server-latin-america" />;
}
