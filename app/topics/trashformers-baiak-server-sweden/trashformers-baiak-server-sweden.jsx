import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-baiak-server-sweden');
}

export default function TrashformersBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-baiak-server-sweden" />;
}
