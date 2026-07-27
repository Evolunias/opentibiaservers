import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-server-uk');
}

export default function TrashformersEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-server-uk" />;
}
