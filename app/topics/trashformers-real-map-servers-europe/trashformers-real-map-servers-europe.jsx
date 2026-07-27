import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-servers-europe');
}

export default function TrashformersRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-servers-europe" />;
}
