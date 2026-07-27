import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-server-sweden');
}

export default function TrashformersRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-server-sweden" />;
}
