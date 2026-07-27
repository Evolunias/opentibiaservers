import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-server-usa');
}

export default function TrashformersRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-server-usa" />;
}
