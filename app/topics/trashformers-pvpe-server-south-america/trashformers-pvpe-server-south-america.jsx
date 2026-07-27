import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvpe-server-south-america');
}

export default function TrashformersPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvpe-server-south-america" />;
}
