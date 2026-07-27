import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-server-sweden');
}

export default function TrashformersPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-server-sweden" />;
}
