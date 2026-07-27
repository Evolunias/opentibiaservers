import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-sweden');
}

export default function TrashformersCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-sweden" />;
}
