import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-server-north-america');
}

export default function TrashformersEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-server-north-america" />;
}
