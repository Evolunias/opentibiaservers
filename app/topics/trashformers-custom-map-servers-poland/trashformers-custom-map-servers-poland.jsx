import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-poland');
}

export default function TrashformersCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-poland" />;
}
