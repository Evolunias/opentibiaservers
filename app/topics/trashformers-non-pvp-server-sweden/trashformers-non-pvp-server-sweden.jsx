import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-non-pvp-server-sweden');
}

export default function TrashformersNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-non-pvp-server-sweden" />;
}
