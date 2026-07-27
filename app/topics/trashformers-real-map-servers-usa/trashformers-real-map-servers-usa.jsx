import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-servers-usa');
}

export default function TrashformersRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-servers-usa" />;
}
