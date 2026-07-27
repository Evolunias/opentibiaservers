import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-server-south-america');
}

export default function TrashformersPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-server-south-america" />;
}
