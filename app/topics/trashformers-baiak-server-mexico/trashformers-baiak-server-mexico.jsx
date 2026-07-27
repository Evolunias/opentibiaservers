import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-baiak-server-mexico');
}

export default function TrashformersBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="trashformers-baiak-server-mexico" />;
}
