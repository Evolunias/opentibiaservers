import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-europe');
}

export default function TrashformersCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-europe" />;
}
