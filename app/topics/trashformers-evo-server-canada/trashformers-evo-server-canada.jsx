import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-server-canada');
}

export default function TrashformersEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-server-canada" />;
}
