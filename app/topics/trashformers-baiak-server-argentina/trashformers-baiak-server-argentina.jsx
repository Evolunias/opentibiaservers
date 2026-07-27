import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-baiak-server-argentina');
}

export default function TrashformersBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-baiak-server-argentina" />;
}
