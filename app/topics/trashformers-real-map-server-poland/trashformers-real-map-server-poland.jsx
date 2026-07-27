import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-server-poland');
}

export default function TrashformersRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-server-poland" />;
}
