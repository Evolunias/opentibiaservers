import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-germany');
}

export default function TrashformersCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-germany" />;
}
