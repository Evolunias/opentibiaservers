import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-server-north-america');
}

export default function TrashformersRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-server-north-america" />;
}
