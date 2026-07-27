import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-servers-north-america');
}

export default function TrashformersRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-servers-north-america" />;
}
