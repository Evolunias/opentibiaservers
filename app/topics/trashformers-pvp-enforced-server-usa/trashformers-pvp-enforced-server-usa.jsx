import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-enforced-server-usa');
}

export default function TrashformersPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-enforced-server-usa" />;
}
