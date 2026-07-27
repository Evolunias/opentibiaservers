import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-servers-brazil');
}

export default function TrashformersEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-servers-brazil" />;
}
