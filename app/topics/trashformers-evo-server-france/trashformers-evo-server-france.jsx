import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-server-france');
}

export default function TrashformersEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-server-france" />;
}
