import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-enforced-server-latin-america');
}

export default function TrashformersPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-enforced-server-latin-america" />;
}
