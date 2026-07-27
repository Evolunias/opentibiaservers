import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-non-pvp-server-south-america');
}

export default function TrashformersNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-non-pvp-server-south-america" />;
}
