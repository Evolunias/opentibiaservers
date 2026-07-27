import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-enforced-server-argentina');
}

export default function TrashformersPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-enforced-server-argentina" />;
}
