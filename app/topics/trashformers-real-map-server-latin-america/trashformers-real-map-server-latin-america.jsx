import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-server-latin-america');
}

export default function TrashformersRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-server-latin-america" />;
}
