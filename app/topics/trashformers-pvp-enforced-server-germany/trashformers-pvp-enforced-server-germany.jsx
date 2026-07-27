import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-enforced-server-germany');
}

export default function TrashformersPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-enforced-server-germany" />;
}
