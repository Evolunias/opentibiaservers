import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-server-south-america');
}

export default function TrashformersEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-server-south-america" />;
}
