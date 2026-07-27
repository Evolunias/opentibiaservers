import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-server-mexico');
}

export default function TrashformersEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-server-mexico" />;
}
