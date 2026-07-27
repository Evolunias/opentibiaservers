import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-servers-germany');
}

export default function TrashformersRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-servers-germany" />;
}
