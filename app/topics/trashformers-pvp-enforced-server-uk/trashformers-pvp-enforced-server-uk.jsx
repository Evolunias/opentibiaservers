import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-enforced-server-uk');
}

export default function TrashformersPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-enforced-server-uk" />;
}
