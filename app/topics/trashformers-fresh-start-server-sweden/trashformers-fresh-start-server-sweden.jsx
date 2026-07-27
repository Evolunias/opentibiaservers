import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-fresh-start-server-sweden');
}

export default function TrashformersFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-fresh-start-server-sweden" />;
}
