import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-server-sweden');
}

export default function TrashformersEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-server-sweden" />;
}
