import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-non-pvp-server-latin-america');
}

export default function TrashformersNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-non-pvp-server-latin-america" />;
}
