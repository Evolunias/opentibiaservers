import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-trashformers-server');
}

export default function CustomMapTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-trashformers-server" />;
}
