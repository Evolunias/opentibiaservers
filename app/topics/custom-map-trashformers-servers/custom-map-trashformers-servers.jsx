import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-trashformers-servers');
}

export default function CustomMapTrashformersServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-trashformers-servers" />;
}
