import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-servers');
}

export default function RealMapTrashformersServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-servers" />;
}
