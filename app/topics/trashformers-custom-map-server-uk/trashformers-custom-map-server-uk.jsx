import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-uk');
}

export default function TrashformersCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-uk" />;
}
