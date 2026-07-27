import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-servers-latin-america');
}

export default function TrashformersRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-servers-latin-america" />;
}
