import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-sweden');
}

export default function TrashformersCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-sweden" />;
}
