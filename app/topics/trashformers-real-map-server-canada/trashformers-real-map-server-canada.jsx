import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-server-canada');
}

export default function TrashformersRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-server-canada" />;
}
