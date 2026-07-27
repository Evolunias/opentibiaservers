import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-brazil');
}

export default function TrashformersCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-brazil" />;
}
