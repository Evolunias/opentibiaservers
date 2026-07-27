import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-brazil');
}

export default function TrashformersCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-brazil" />;
}
