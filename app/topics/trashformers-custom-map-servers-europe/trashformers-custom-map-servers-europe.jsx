import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-europe');
}

export default function TrashformersCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-europe" />;
}
