import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-ots');
}

export default function RealMapTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-ots" />;
}
