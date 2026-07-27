import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-uk');
}

export default function TrashformersCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-uk" />;
}
