import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-non-pvp-server-north-america');
}

export default function TrashformersNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-non-pvp-server-north-america" />;
}
