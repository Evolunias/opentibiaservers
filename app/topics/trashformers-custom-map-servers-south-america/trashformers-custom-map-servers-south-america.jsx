import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-south-america');
}

export default function TrashformersCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-south-america" />;
}
