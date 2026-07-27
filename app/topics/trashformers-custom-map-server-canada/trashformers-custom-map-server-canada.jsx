import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-canada');
}

export default function TrashformersCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-canada" />;
}
