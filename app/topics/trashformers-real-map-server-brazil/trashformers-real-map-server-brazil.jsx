import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-server-brazil');
}

export default function TrashformersRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-server-brazil" />;
}
