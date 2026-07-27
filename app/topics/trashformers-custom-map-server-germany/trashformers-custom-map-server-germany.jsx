import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-germany');
}

export default function TrashformersCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-germany" />;
}
