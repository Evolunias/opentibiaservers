import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-server-usa');
}

export default function TrashformersEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-server-usa" />;
}
