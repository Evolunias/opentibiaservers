import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-website');
}

export default function RealMapTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-website" />;
}
