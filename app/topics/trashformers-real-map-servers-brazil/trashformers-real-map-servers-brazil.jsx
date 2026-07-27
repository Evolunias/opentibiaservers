import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-servers-brazil');
}

export default function TrashformersRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-servers-brazil" />;
}
