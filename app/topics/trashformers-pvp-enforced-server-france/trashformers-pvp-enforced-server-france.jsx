import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-enforced-server-france');
}

export default function TrashformersPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-enforced-server-france" />;
}
