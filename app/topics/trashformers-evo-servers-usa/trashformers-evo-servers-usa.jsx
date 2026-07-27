import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-servers-usa');
}

export default function TrashformersEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-servers-usa" />;
}
