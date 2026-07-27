import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-argentina');
}

export default function TrashformersCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-argentina" />;
}
