import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-canada');
}

export default function TrashformersCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-canada" />;
}
