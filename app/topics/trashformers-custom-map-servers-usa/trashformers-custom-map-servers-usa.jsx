import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-usa');
}

export default function TrashformersCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-usa" />;
}
