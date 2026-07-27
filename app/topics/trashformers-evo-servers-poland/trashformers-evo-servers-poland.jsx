import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-servers-poland');
}

export default function TrashformersEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-servers-poland" />;
}
