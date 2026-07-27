import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-server-north-america');
}

export default function TrashformersPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-server-north-america" />;
}
