import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-retro-server-latin-america');
}

export default function TrashformersRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-retro-server-latin-america" />;
}
