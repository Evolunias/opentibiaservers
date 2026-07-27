import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-server-europe');
}

export default function TrashformersRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-server-europe" />;
}
