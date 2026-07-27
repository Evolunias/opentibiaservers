import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvpe-server-latin-america');
}

export default function TrashformersPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvpe-server-latin-america" />;
}
