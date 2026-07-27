import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-usa');
}

export default function TrashformersCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-usa" />;
}
