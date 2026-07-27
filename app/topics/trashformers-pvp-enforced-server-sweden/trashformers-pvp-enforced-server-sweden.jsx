import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-enforced-server-sweden');
}

export default function TrashformersPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-enforced-server-sweden" />;
}
