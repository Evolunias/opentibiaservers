import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-server-germany');
}

export default function TrashformersEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-server-germany" />;
}
