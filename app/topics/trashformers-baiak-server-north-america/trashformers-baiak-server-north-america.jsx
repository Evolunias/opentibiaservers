import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-baiak-server-north-america');
}

export default function TrashformersBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-baiak-server-north-america" />;
}
