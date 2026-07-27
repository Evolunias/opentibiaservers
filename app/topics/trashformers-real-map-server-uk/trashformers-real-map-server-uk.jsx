import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-server-uk');
}

export default function TrashformersRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-server-uk" />;
}
