import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-server-latin-america');
}

export default function TrashformersPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-server-latin-america" />;
}
