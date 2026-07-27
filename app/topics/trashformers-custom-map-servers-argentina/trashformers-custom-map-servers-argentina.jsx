import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-argentina');
}

export default function TrashformersCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-argentina" />;
}
