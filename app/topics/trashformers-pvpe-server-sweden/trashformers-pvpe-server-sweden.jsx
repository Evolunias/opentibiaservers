import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvpe-server-sweden');
}

export default function TrashformersPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvpe-server-sweden" />;
}
