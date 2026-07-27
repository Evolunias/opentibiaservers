import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-enforced-server-north-america');
}

export default function TrashformersPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-enforced-server-north-america" />;
}
