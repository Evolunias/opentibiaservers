import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-server-brazil');
}

export default function TrashformersEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-server-brazil" />;
}
