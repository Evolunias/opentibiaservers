import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-server-mexico');
}

export default function TrashformersRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-server-mexico" />;
}
