import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-server-germany');
}

export default function TrashformersRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-server-germany" />;
}
