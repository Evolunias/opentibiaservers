import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-server-poland');
}

export default function TrashformersEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-server-poland" />;
}
