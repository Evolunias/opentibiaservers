import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-south-america');
}

export default function TrashformersCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-south-america" />;
}
