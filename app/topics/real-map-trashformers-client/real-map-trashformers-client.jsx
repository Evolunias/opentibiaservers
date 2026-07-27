import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-client');
}

export default function RealMapTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-client" />;
}
