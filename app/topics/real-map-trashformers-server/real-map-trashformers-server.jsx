import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-server');
}

export default function RealMapTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-server" />;
}
