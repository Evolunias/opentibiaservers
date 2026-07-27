import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-poland');
}

export default function TrashformersCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-poland" />;
}
