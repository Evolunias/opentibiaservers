import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-server-argentina');
}

export default function TrashformersRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-server-argentina" />;
}
